function getFieldsValue(tableNames) {
        var nonEmptyFields = [];
        var fieldCounts = {};
        var dictionaryInfo = {};

        // Initialize field counts
        var gr = new GlideRecord(tableNames);
        gr.query();
        if (gr.next()) {
            var fields = gr.getFields();
            for (var i = 0; i < fields.size(); i++) {
                var fieldName = fields.get(i).getName();
                fieldCounts[fieldName] = 0;
            }
        }

        // Iterate through each record and count non-empty fields
        gr = new GlideRecord(tableNames);
        gr.query();
        while (gr.next()) {
            var fields = gr.getFields();
            for (var i = 0; i < fields.size(); i++) {
                var fieldName = fields.get(i).getName();
                var value = gr.getValue(fieldName);
                if (value !== '' && value !== null) {
                    fieldCounts[fieldName]++;
                }
            }
        }

        // Identify fields that are non-empty for any records
        for (var field in fieldCounts) {
            if (fieldCounts[field] > 0) {
                nonEmptyFields.push(field);
            }
        }
        var hierarchyList = new TableUtils(tableNames).getTables();
        var arr = hierarchyList.toArray();
        var resultString = arr.join(', ');
        // Fetch additional dictionary information
        var dictGr = new GlideRecord('sys_dictionary');
        // Query for dictionary entries related to specific tables
        dictGr.addEncodedQuery('nameIN'+resultString);
        dictGr.query();
        while (dictGr.next()) {
            var fieldName = dictGr.getDisplayValue('element');
            dictionaryInfo[fieldName] = {
                type: dictGr.getDisplayValue('internal_type') || 'undefined',
                readOnly: dictGr.getDisplayValue('read_only') == 'true' ? 'Yes' : 'No',
                mandatory: dictGr.getDisplayValue('mandatory') == 'true' ? 'Yes' : 'No',
                fieldTableName: dictGr.getDisplayValue('name') || 'undefined',
				referenceTableName: dictGr.getDisplayValue('reference') || '',
				maxLength: dictGr.getValue('max_length') || '',
				columnLabel: dictGr.getDisplayValue('column_label') || 'empty'
            };
        }

        var csvRows = [];

        // Add header row
        csvRows.push('Table Name,Field Name,Field Label,Type,Reference,Max Length,Read Only,Mandatory\r\n');

        // Add fields and their dictionary info as rows
        for (var i = 0; i < nonEmptyFields.length; i++) {
            var fieldName = nonEmptyFields[i];
            var dictInfo = dictionaryInfo[fieldName] || {
                type: 'undefined',
                readOnly: 'undefined',
                mandatory: 'undefined',
                fieldTableName: 'undefined',
				referenceTableName:'',
				maxLength:'',
				columnLabel:'undefined'
            };
            csvRows.push(dictInfo.fieldTableName + ',' + fieldName + ','+ dictInfo.columnLabel  + ',' + dictInfo.type + ',' + dictInfo.referenceTableName + ',' + dictInfo.maxLength + ',' + dictInfo.readOnly + ',' + dictInfo.mandatory + '\r\n');
        }

        var gdt = new GlideDateTime();
        var fileName = tableNames + ' Non Empty Fields ' + gdt.getDisplayValue() + '.csv';

        // Write the CSV to an attachment
        var attachment = new Attachment();
        var attachmentRec = attachment.write('kb_knowledge', 'a20df6b2978f8e1088b036e71153af62', fileName, 'text/csv', csvRows.join(''));

        var att = new GlideRecord('sys_attachment');
        att.addQuery('file_name', fileName);
        att.addQuery('table_sys_id', 'a20df6b2978f8e1088b036e71153af62');
        att.orderByDesc('sys_created_on');
        att.query();
        if (att.next()) {
            return att.sys_id.toString(); // Return the sys_id of the attachment
        }
        return '';
    }
