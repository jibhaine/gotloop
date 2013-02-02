<%@ page isErrorPage="true" %>
<%@ page language="java" %>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<meta name="title" content="gotLoop" />
<meta name="keywords" content="sound loop, sample, riff, short, drum, hip,hop, dub, drumnbass, bass" />
<title>Error - gotLoop</title>
<style type="text/css">
@import url(/css/style.css);
</style>
</head>
<body>
	<header>
		<a id="logo" href="/">
			<img src="/img/gotloop.png" alt="gotLoop" />
			<h1 style="display: none;"><span class="got">got</span>Loop</h1>
			<p>share your riff!</p>
		</a>
		<ul id="menu">
			<li><a href="/">home</a></li>
			<li><a href="/loops">loops</a></li>
			<li><a href="/tags">tags</a></li>
			<li><a href="/archive">archive</a></li>
			<li><a href="/user">user</a></li>
		</ul>
	</header>
	<div id="wrapper" style="width:760px;">
	<section id="errorPage">
	<h1 style="margin:0 auto;" class="logo"><span class="got">got</span>Loop</h1>
		<article class="pause">
		<h2>Error <%=request.getAttribute("javax.servlet.error.status_code")%> - <%=request.getAttribute("javax.servlet.error.exception_type")%></h2>
		<h3><%=request.getAttribute("javax.servlet.error.message")%></h3>
		</article>
		<%
		if( exception != null ) {
			    out.print("<pre>");
			    exception.printStackTrace(new java.io.PrintWriter(out));
			    out.print("</pre>");
		}    
		%>
		<article>
			<table>
				<thead>
					<tr>
						<th colspan="2">Header values</th>
					</tr>
					<tr>
						<th>Name</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					<%
					String name  = "";
					String value = "";
					
					java.util.Enumeration<String> headers = request.getHeaderNames();
					while(headers.hasMoreElements())
					{
					 name  = (String) headers.nextElement();
					 value = request.getHeader(name);
					%>
					<tr>
						<td><%=name%></td>
						<td><%=value%></td>
					</tr>
					<%
					}
					%>
				</tbody>
			</table>
			<br/>
			<table>
				<thead>
					<tr>
						<th colspan="2">Request Attributes</th>
					</tr>
					<tr>
						<th>Name</th>
						<th>Value</th>
					</tr>
				</thead>
				<%
				java.util.Enumeration attributes = request.getAttributeNames();
				while(attributes.hasMoreElements())
				{
				 name  = (String) attributes.nextElement();
	
				 if (request.getAttribute(name) == null)
				 {
				  value = "null";
				 }
				 else
				 {
				  value = request.getAttribute(name).toString();
				 }
	
				%>
				<tr>
					<td><%=name%></td>
					<td><%=value%></td>
				</tr>
				<%
				}
				%>
			</table>
						<br/>
			<table>
				<thead>
					<tr>
						<th colspan="2">Session Attributes</th>
					</tr>
					<tr>
						<th>Name</th>
						<th>Value</th>
					</tr>
				</thead>
				<%
				java.util.Enumeration sessionAttributes = session.getAttributeNames();
				while(sessionAttributes.hasMoreElements())
				{
				 name  = (String) sessionAttributes.nextElement();
	
				 if (session.getAttribute(name) == null)
				 {
				  value = "null";
				 }
				 else
				 {
				  value = session.getAttribute(name).toString();
				 }
	
				%>
				<tr>
					<td><%=name%></td>
					<td><%=value%></td>
				</tr>
				<%
				}
				%>
			</table>
		</article>
	</section>
	</div>
	
	<footer>
		<p>
			<a href="/about">gotLoop.com</a><br/>
			Design and code by <a href="http://www.jibhaine.fr">jibHaine</a><br/>
			'Fugue icons' by <a href=http://p.yusukekamiyamane.com/">Yusuke Kamiyamane</a>
		</p>
		<img 
			src="http://code.google.com/appengine/images/appengine-noborder-120x30.gif" 
			alt="Powered by Google App Engine" 
		/>
	</footer>
</body>
</html>