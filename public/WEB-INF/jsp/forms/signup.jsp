<form id="signUpForm" action="/signup" method="post">
	<fieldset id="signupStep1">
		<input type="text" name="email" value="e-mail"/>
		<input type="text" name=login value="name" />
		<input type="password" name="pass" value="1234"/>
		<button class="nextStep">Next</button>
	</fieldset>
	<fieldset id="signupStep2">
		<label for="mailLoop"><input type="checkbox" id="mailLoops"></input></label>
		<label for="mailLoop"></label>
		<label for="mailComment"></label>
		<input type="submit" value="OK"/>
	</fieldset>
	<fieldset id="signupStep3">
		<input type="submit" value="OK"/>
	</fieldset>
</form>