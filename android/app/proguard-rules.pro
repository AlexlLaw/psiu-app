# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# react-native-reanimated
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.react.turbomodule.** { *; }

# Add any project specific keep options here:
# Mantenha os nomes dos métodos e classes usados pelo React Native
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.uimanager.** { *; }
-keep class com.facebook.react.** { *; }

# Mantenha os nomes dos métodos e classes usados pelo React Navigation
-keep class androidx.** { *; }
-keep class com.reactnativecommunity.webview.** { *; }

# Mantenha os nomes dos métodos e classes usados pelo seu código
-keep class com.seuprojeto.** { *; }
