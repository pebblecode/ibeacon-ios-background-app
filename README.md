#Open app in background mode to send requests to remote server when in proximity to a ibeacon.

###BlogPost pinched from:
http://adhocmanager.com/posts/ios-ibeacon-and-background-service/

###more info:
http://stackoverflow.com/questions/20406287/find-a-specific-ibeacon-after-i-entered-the-region-background-mode

###AppDelgate.m Changes:
http://stackoverflow.com/questions/31865234/ios-8-background-location-update-triggered-by-ibeacon



###Avvel AZ Short Range iBeacon 'jaalee' ACTIVATION.

1. download ebeacon app for iOS, I tried it for Android but it didn't work.
2. grab the ibeacon and drop it facedown (vents facing down) onto a hard flat surface. 3-4cm drop should do.
3. open ebeacon app, find the device in the central tab. look for 'jaalee'.
4. tap to connect. use code 666666
5. Tap Beacon 'Config' (0xFFF0)
6. Tap Beacon 'UUID' (0xFFF2)
7. Tap 'Write'. Now put in the new UUID, make sure that the line begins with "0x". 
  7.1 https://www.uuidgenerator.net/ 
  7.2 copy without '-' and make sure that the line begins with "0x". 
8. Tap 'Send'. Confirmation of sent Hex value appears as a box below the 'write value box' with the comment 'Select to write'.
9. Tap 'Config' (right hand corner) which will take you to a screen containing all the characteristics about the iBeacon. The UUID value box should now contain a different value. 
10. tap 'start configuring'


#WE're limited by Apples CoreLocation 20 ibeacon UUIDs per app.
https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/LocationAwarenessPG/RegionMonitoring/RegionMonitoring.html

###Start
1. ```npm i && open ios/c2cble.xcodeproj```
2. Play button to debug on device. Simulator bluetooth doesn't exist, it needs to be a real device.
