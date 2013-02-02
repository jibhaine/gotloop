<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<section id="loopList" class="content">
<h2>Icones</h2>

	<article class="loop">
	<a href="#" class="button play">{loop.title}</a>
	<canvas class="viz"></canvas>
	<a href="/loop/{loop.url}"><h2>{loop.title}</h2></a>
	<p>{loop.description}</p>
	<nav>
		<a href="/loop/{loop.url}/+" 		class="user ico">{loop.author}</a>
		<a href="/loop/{loop.url}/fav" 		class="star ico">Add to favorites</a>
		<a href="/loop/{loop.url}/comment"  class="comment	ico">Comment Loop</a>
		<a href="/loop/{loop.url}/share" 	class="twitter	ico">Tweet it</a>
		<a href="/loop/{loop.url}/share" 	class="facebook	ico">Like it</a>
	</nav>
	</article>
<ul>
	<li><a href="/loop/comments" class="ico comment">Comments</a></li>
	<li><a href="/loop/comments/add" class="ico comment">Add a	comment</a></li>
	<li><a href="/loop" class="ico date">Date</a></li>
	<li><a href="" class="ico file">File</a></li>
	<li><a href="" class="ico gear">Params</a></li>
	<li><a href="" class="ico link">Link</a></li>
	<li><a href="" class="ico load">Loading...</a></li>
	<li><a href="/loops/page/{noPage}" class="ico next">Next Loops</a></li>
	<li><a href="/loops/page/{noPage}" class="ico prev">Previous Loops</a></li>
	<li><a href="/rss" class="ico rss">gotLoop RSS</a></li>
	<li><a href="/tag/search" class="ico search">Search</a></li>
	<li><a href="/loop/vote" class="ico star">Vote !</a></li>
	<li><a href="/tag/{tag.label}" class="ico tag">{tag.label}</a></li>
	<li><a href="/user/{idUser}" class="ico user">User</a></li>
</ul>
<div class="player">
<h2>Big Button</h2>
<a href="#" class="button off"></a> 
<a href="#" class="button loading"></a>
<a href="#" class="button play"></a> 
<a href="#" class="button pause"></a>
<a href="#" class="button empty"></a>
</div>
</section>