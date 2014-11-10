<html>
<head>
	<title>Namuu.co – Word Generator</title>
	<meta name="description" content="Generate short meaningless words for your business or products">
	<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,700,400italic|Anonymous+Pro:700,400' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="wrapper">
		<h1 class="title">Namuu</h1>
		<div id="letters" class="letters">
			<div class="letter-control js-letter-control">
				<h1 class="letter"></h1>
				<input type="text" maxlength="1" value="v" class="letter-input">
				<select id="" class="type">
					<option value="all">Random</option>
					<option value="c">Consonant</option>
					<option value="v">Vowel</option>
				</select>
				<button class="nudge">Nudge</button>
				<button class="hold">Hold</button>
			</div>
		</div>
		<div class="controls">
			<button id="spin">Spin!</button>
			<button id="add-letter">Add letter</button>
			<button id="remove-letter">Remove letter</button>
			<button id="show-hide-pool">Settings</button>
			<button class="check-domain" id="check-domain">Check domain</button>
		</div>
		<div id="pool-wrap" class="pool-wrap">
			<div class="option">
				<h3>Letter's pool</h3>
				<p>These are the letters being used. You can increase the number of your 'favourite' letters, or remove others.</p>
		<textarea name="" id="letters-pool">aeiou
bcdfghjklmnpqrstvwxyz</textarea>
				<button id="update-pool">Update letters</button>
			</div>
			<div class="option">
				<h3>Combinations so far</h3>
				<p>Last 3</p>
				<ul id="last-3-words"></ul>
				<p><button id="show-all">Show all</button></p>
				<p class="all-words-wrap" id="all-words-wrap"><textarea id="all-words"></textarea></p>
			</div>
			<div class="option">
				<h3>Domain check</h3>
				<ul>
					<li><p>Enter your API key for <a target="_blank" href="http://freedomainapi.com/">freedomainapi.com</a></p>
					<p><label for="api-key">Api key: <input type="text" id="api-key"/></label></p></li>
					<li><p>Enter the extension required, i.e. <code>.co</code></p>
					<p><label for="domain">Extension: <input type="text" id="domain"/></label></p></li>
					<p class="api-key-thanks">Thanks, you should now see another button to check the API.</p>
				</ul>
			</div>
			<div class="option">
				<h3>Appendix</h3>
				<p><a class="popup-modal" href="#about-modal">A little about Namuu</a></p>
				<p>&copy; <?php echo date('Y'); ?></p>

				<div id="about-modal" class="mfp-hide white-popup-block">
					<p><a class="popup-modal-dismiss" href="#">Dismiss</a></p>
					<h1>Namuu</h1>
					<p>Namuu generates random words (well, combinations of characters). It's goal is to aid the creation of fun, seemingly meaningless business and product names.</p>
					<h2>How to use it</h2>
					<ul>
						<li>Click "Spin!" to create a random set of characters</li>
						<li>To get the 'sound' right, you can select whether letters in certain slots should be consonents, vowels or either (random)</li>
						<li>If you like the look of a letter, or sequence click "Hold" beneath them. You can now continue spinning while the other letters stay put.</li>
						<li>Conversely, if you just wish to change one letter click "Nudge" beneath it and it will give you a new letter</li>
					</ul>
					<h4>The settings</h4>
					<ul>
						<li>
						<h3>The "letter's pool"</h3>
						This is where we grab all the letters shown above. If you like the sound of some "zzz's" throw a load more in here. Don't think the "u" sound works for your new brand name? Delete the "u's" from here and then click "Update letters" and carry on</li>
						<li>
							<h3>Combinations so far</h3>
							A good place to grab your last 3 words (incase you accidentally clicked another button). If you wish to grab all of them, no worries just click show all and copy them out of the text area to somewhere safe!
						</li>
						<li>
							<h3>Domain check</h3>
							If you wish to check if a domain is available but don't want to type them into a registrar every 5 seconds, just go ahead and hop over to <a target="_blank" href="http://freedomainapi.com/">freedomainapi.com</a> and grab an API key for free. Plug it in where its mentioned in the settings and you'll be good to go. Just remember to add <code>.com</code> or <code>.co.uk</code> in the domain extension box!
						</li>
					</ul>
					
					<p>Comments and suggestions welcome. <a href="http://twitter.com/eightarmshq">@EightArmsHQ</a></p>
					<p><a class="popup-modal-dismiss" href="#">Dismiss</a></p>
				</div>
			</div>
		</div>
		<div class="push"></div>
	</div>
	<footer class="site-footer">
		<a href="http://eightarms.co.uk" target="_blank">
			<img src="http://hosted.eightarms.co.uk/assets/a_site_by_eightarms_light.svg" alt="A site by Eight Arms">
		</a>
	</footer>
	<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/min/plugins.js"></script>
	<script type="text/javascript" src="js/min/script.js"></script>
</body>
</html>