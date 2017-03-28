# create certificate
# keytool -genkey -alias sendmoreapp -keyalg RSA -keysize 2048 -validity 10000 --keystore ../../cert/sendmoreapp.cer

# sign the APK
# jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-unsigned.apk sendmoreapp -keystore ../../../cert/sendmoreapp.cer

# create a new APK
# $ANDROID_HOME/build-tools/25.0.2/zipalign 4 release-unsigned.apk sendmoreapp-1.0.17002.apk
