//This BR is created when the worknotes needs to be copied from task to parent RITM
//When: AFTER and UI actions: Insert, Update
(function executeRule(current, previous /*null when async*/) {
	var ritm = new GlideRecord('sc_req_item');
	if(ritm.get(current.request_item)){
		var currWorkNote = current.work_notes.getJournalEntry(1);
		if(ritm.work_notes.getJournalEntry(1) == '' || currWorkNote.indexOf(ritm.work_notes.getJournalEntry(1)) <0){
			ritm.work_notes = currWorkNote;
			ritm.update();
		}
	}
})(current, previous);
