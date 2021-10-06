//Use this to have Info Message with the link & number of the original record(for example requested item) while creating a new record on any table(incident), This can be added any UI action or similar. 

gs.addInfoMessage(gs.getMessage("You will be navigated back to <a href='{0}'>{1}</a> upon submission", [current.getLink(), current.number + ""]));
