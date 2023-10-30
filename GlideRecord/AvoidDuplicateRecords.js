/*prevent having duplicate record in asset table */

/* Use this logic in Before Insert BR , so before it gets imported following script gets execution and abort submission*/
var duplicaterecord = new GlideRecord('alm_asset');
duplicaterecord.addQuery('asset_tag', current.asset_tag);
duplicaterecord.query();
if (duplicaterecord.next()) {
gs.addErrorMessage("Asset tag exists already");
current.setAbortAction(true);
}
