schema {
    query: Query  // It is a query schema to querying the data.
}

type Query {
	EntersysId(sys_id:ID!):incident // You can define your own query based on your requirement.
}
type incident{
	sys_id:DisplayableString // Displayable String is the type of data
	number:DisplayableString
	short_description:DisplayableString
	caller_id:User @source(value:"caller_id.value") // @source is used for extended table, here caller field is referencing to sys_user table.
	cmdb_ci:CI @source(value:"cmdb_ci.value")
}
type User{
	sys_id:DisplayableString
	user_name:DisplayableString   // These parameters will help to get the detail of caller_id.
	first_name:DisplayableString
	last_name:DisplayableString
}
type CI{
	sys_id:DisplayableString
	install_status:DisplayableString  // These parameters will help to get the detail of configuration item.
	name:DisplayableString
}
type DisplayableString{
	value:String  // This will return the value of provided parameters.
	display_value:String  // This will return the display value of provided parameters.
}
