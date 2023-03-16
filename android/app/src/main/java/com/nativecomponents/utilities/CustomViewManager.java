package com.nativecomponents.utilities;
import android.content.Context;
import android.view.LayoutInflater;

import com.facebook.react.common.MapBuilder.Builder;

import com.nativecomponents.R;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class CustomViewManager extends SimpleViewManager<CustomView> {

    public static final String REACT_CLASS = "RCTMyCustomView";

    @Override
    public String getName() { return REACT_CLASS; }

    @Override
    public CustomView createViewInstance(ThemedReactContext context) {
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        CustomView view = (CustomView)inflater.inflate(R.layout.custom_view, null);
        return view;
    }

    @ReactProp(name = "status")
    public void setStatus(CustomView view, Boolean status) {
        view.setStatus(status);
    }

    public Map getExportedCustomBubblingEventTypeConstants() {

        String eventName = "onClickEvent";
        String propName = "onClick";
        Map onClickHandler = MapBuilder.of("phasedRegistrationNames",MapBuilder.of("bubbled", propName));

        Builder events = MapBuilder.builder();
        events.put(eventName, onClickHandler);
        return events.build();

    }

}