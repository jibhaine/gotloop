<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles"%>

<section id="tags" class="content">
<h2>Tags</h2>
<ul>
<c:forEach var="tag" items="{tagList}">
	<li>{tag.name} ({tag.count})</li>
</c:forEach>
</ul>
</section>