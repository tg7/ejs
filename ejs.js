//    OK, so have fun! :D
// -------------------
// <%
//     var fruits = ["Apple", "Pear", "Orage", "Lemon"]
//       , random = " ".repeat(198).split("").map(x => Math.random())
//       ;
// %>

// These fruits are amazing:
// <% for(var i = 0; i < fruits.length; ++i) {%>
//   - <%=fruits[i]%>s<% } %>

// Let's see some random numbers:

// <% random.forEach((c, i) => {
// %> <%=c.toFixed(10) + ((i + 1) % 6 === 0 ? "\n": "") %><%});%>