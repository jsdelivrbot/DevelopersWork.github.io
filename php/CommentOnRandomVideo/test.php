<?php
	
if (!file_exists('../vendor/autoload.php')) {
  throw new \Exception('please run "composer require google/apiclient:~2.0" in "' . __DIR__ .'"');
}
require_once '../vendor/autoload.php';
session_start();
/*
 * You can acquire an OAuth 2.0 client ID and client secret from the
 * {{ Google Cloud Console }} <{{ https://cloud.google.com/console }}>
 * For more information about using OAuth 2.0 to access Google APIs, please see:
 * <https://developers.google.com/youtube/v3/guides/authentication>
 * Please ensure that you have enabled the YouTube Data API for your project.
 */
$OAUTH2_CLIENT_ID ='330348809628-p7c5ol1c35s964282g1rolhkdu7k6fje.apps.googleusercontent.com';
$OAUTH2_CLIENT_SECRET = 'VKSEGDi5RxALux_68CI6c7Cm';
/* You can replace $VIDEO_ID with one of your videos' id, channel id with your channel's id,
 * and text with the comment you want to be added.
 */
$CHANNEL_ID = '<script>objectSearch.searchChannelLog("Developers@Work");</script>';
$VIDEO_ID = '<script>objectVideos.videoId('.$CHANNEL_ID.');</script>';
$TEXT = 'PHP script Test';

?>
<html>
	<head>
	<script>
		var objectSearch = new search, objectCount = new count;
		var objectVideos = new listVideos;
	</script>
	<script type="text/javascript" async="" src="https://rawgit.com/DevelopersWork/DevelopersWork.github.io/modules/javaScript/SubscribersCount/countScript.js"></script>
		<title>Test---</title>
	</head>
	
	<body>
	
	</body>
</html>