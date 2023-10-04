/*
flatMap(Function fn)
Applies a function that returns an Optional object to the result of a query. Use this method to perform a second query using the result of the first.

*/


new global.GlideQuery('alm_asset')
.whereNotNull('owned_by')
.selectOne('owned_by')
.flatMap(function (asset) {
    return new global.GlideQuery('sys_user')
        .getBy({ sys_id: asset.owned_by }, ['first_name', 'last_name', 'company.name'])
})
.ifPresent(GQ.jsonDebug);
