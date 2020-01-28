function gen_mail_to_link(lhs,rhs,subject) {
    document.write("<a class='btn-link' style='color: darkblue' href=\"mailto");
    document.write(":" + lhs + "@");
    document.write(rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/a>");
}