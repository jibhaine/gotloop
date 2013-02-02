<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles"%>
<section id="loopList" class="content">
	<nav class="topNav">
		<ul><li>1</li><li>2</li><li>3</li></ul>
	</nav>
	<article class="loop">
	<a href="#" class="button play"></a>
	<a href="/loop/{loop.url}"><h2>{loop.title}</h2></a>
	<canvas class="viz"></canvas>
	<p>{loop.description}</p>
	<nav>
		<a href="/loop/{loop.url}/details" 	class="user ico">{loop.author}</a>
		<a href="/loop/{loop.url}/fav" 		class="star ico">Add to favorites</a>
		<a href="/loop/{loop.url}/comment"  class="comment ico">Comment Loop</a>
		<a href="/loop/{loop.url}/share" 	class="twitter ico">Share on twitter</a>
		<a href="/loop/{loop.url}/share" 	class="facebook ico">Share on Facebook</a>
	</nav>
	<section class="comments">
		<article class="comment">
			<img src=""/>
			<legend>by <a href="/user/" class="user ico">{comment.author}</a></legend>
			<p>{comment.comment}</p>
		</article>
		<article class="comment">
			<img src=""/>
			<legend>by <a href="/user/">{comment.author}</a></legend>
			<p>{comment.comment}</p>
		</article>
		
		<form id="commentAdd" class="commentAdd">
		
		</form>
	</section>
	</article>
</section>