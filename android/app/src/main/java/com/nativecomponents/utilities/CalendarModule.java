package com.nativecomponents.utilities;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;
public class CalendarModule extends ReactContextBaseJavaModule {
    private int eventCount = 0;
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }
    public void createCalendarEvent(Callback callback){
        Log.d("CalendarModule","Logged from our calendar  module");
        callback.invoke("Data returned from Native Calendar Module");
    }
    @ReactMethod
    public  void createCalendarPromise(Promise promise) {
        try{
            promise.resolve("Data Returned from Promise");
            eventCount +=1;
            sendEvent(getReactApplicationContext(),"EventCount", eventCount);
        }catch (Exception e)
        {
            promise.reject("Error returned from promise",e);
        }

    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           int params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }
}
