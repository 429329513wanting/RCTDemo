//
//  NAUtilManager.m
//  RCTDemo
//
//  Created by ghwang on 15/12/29.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "NAUtilManager.h"


@implementation NAUtilManager

RCT_EXPORT_MODULE();


RCT_EXPORT_METHOD(sayHello:(NSString *)name){
  
  RCTLogInfo(@"%@",name);

}

RCT_EXPORT_METHOD(fromOCGreet:(RCTResponseSenderBlock)callback) {
  
  
  callback(@[[NSNull null],@{@"greet":@"hello JS,my name is OC",@"info":@"Class NAUtilManager"}]);


}

@end
