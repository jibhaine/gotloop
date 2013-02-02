<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles"%>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
	<t:insertAttribute name="ascii" />
<html>
    <head>
    	<t:insertAttribute name="head" />
    </head>
    <body>
    <header>
    	<t:insertAttribute name="header" />
    </header>
    <div id="wrapper">
    	<t:insertAttribute name="content" />
    	<aside id="sidebar">
    		<t:insertAttribute name="aside" />
    	</aside>
    </div>
    <footer>
    	<t:insertAttribute name="footer" />
    </footer>
    <script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try{
var pageTracker = _gat._getTracker("UA-4466694-8");
pageTracker._trackPageview();
} catch(err) {}
</script>
	</body>
</html>