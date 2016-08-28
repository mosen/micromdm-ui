'use strict';

// Available MDM Commands
export const DEVICE_INFO = Symbol('DeviceInfo');
export const SECURITY_INFO = Symbol('SecurityInfo');
export const PROFILE_LIST = Symbol('ProfileList');
export const CERTIFICATE_LIST = Symbol('CertificateList');
export const OS_UPDATE_STATUS = Symbol('OSUpdateStatus');
export const AVAILABLE_OS_UPDATES = Symbol('AvailableOSUpdates');
export const INSTALLED_APPLICATION_LIST = Symbol('InstalledApplicationList');
export const REMOVE_PROFILE = Symbol('RemoveProfile');
export const RESTRICTIONS = Symbol('Restrictions');
export const INSTALL_APPLICATION = Symbol('InstallApplication');

// Payload or command compatibility conditions
export const IOS_GREATERTHAN = Symbol('IOS_GREATERTHAN');
export const OSX_GREATERTHAN = Symbol('OSX_GREATERTHAN');

