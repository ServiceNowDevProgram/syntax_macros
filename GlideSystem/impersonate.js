try {
    // Impersonate to a specific user based on User ID (user_name)
    gs.getSession().onlineImpersonate("user_name");
    // TODO - Write the logic here
}
finally {
    // In order to avoid unexpected error the unimpersonate action is added to the finally part of code
    // which will certainly be executed
    gs.getSession().onlineUnimpersonate();
}
