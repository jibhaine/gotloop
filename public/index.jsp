<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
		<tiles:insertAttribute name="head" />
	</head>
    <body>
		<tiles:insertAttribute name="top" />

        <div id="content">
            <div id="main">
            	<tiles:insertAttribute name="content" />
            </div>
			
			<div id="sidebar">
				<dl>
					<dt class="ico load">last loops</dt>
					<dd>
						<ul>
							<li><a>1 - a</a></li>
							<li><a>2 - b</a></li>
							<li><a>3 - c</a></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt class="ico date">Archive</dt>
					<dd>
						<ul>
							<li><a>1 - a</a></li>
							<li><a>2 - b</a></li>
							<li><a>3 - c</a></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt class="ico star">Best Rated</dt>
					<dd>
						<ul>
							<li><a>1 - a</a></li>
							<li><a>2 - b</a></li>
							<li><a>3 - c</a></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt class="ico rss">rss</dt>
					<dd>
						<ul>
							<li><a>1 - a</a></li>
							<li><a>2 - b</a></li>
							<li><a>3 - c</a></li>
						</ul>
					</dd>
				</dl>
			</div>
        </div>
		<tiles:insertAttribute name="footer" />
    </body>
</html>

