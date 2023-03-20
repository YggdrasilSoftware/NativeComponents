#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(RCTCustomViewManager, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(status, BOOL)
RCT_EXPORT_VIEW_PROPERTY(onClick, RCTBubblingEventBlock)
@end
