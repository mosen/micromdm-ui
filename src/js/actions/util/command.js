'use strict';

import * as MDM from '../../constants/mdm';

const ALL_QUERIES = [
  'UDID',
  'Languages', // ATV
  'Locales', // ATV
  'DeviceID', // ATV
  'OrganizationInfo', // IOS
  'LastCloudBackupDate', // IOS 8
  'AwaitingConfiguration', // IOS 9

  // iTunes
  'iTunesStoreAccountIsActive', // IOS 7+, OSX 10.9+
  'iTunesStoreAccountHash', // IOS 8+, OSX 10.10+

  // Device
  'DeviceName',
  'OSVersion',
  'BuildVersion',
  'ModelName',
  'Model',
  'ProductName',
  'SerialNumber',
  'DeviceCapacity',
  'AvailableDeviceCapacity',
  'BatteryLevel', // IOS 5
  'CellularTechnology', // IOS 4
  'IMEI',
  'MEID',
  'ModemFirmwareVersion',
  'IsSupervised', // IOS 6
  'IsDeviceLocatorServiceEnabled', // IOS 7
  'IsActivationLockEnabled', // IOS 7, OSX 10.9
  'IsDoNotDisturbInEffect', // IOS 7
  'EASDeviceIdentifier', // IOS 7, OSX 10.9
  'IsCloudBackupEnabled', // IOS 7.1
  'OSUpdateSettings', // OSX 10.11
  'LocalHostName', // OSX 10.11
  'HostName', // OSX 10.11
  'ActiveManagedUsers', // OSX 10.11
  'IsMDMLostModeEnabled', // IOS 9.3
  'MaximumResidentUsers', // IOS 9.3

  // Network
  'ICCID', // IOS
  'BluetoothMAC',
  'WiFiMAC',
  'EthernetMACs', // Surprisingly works in IOS
  'CurrentCarrierNetwork',
  'SIMCarrierNetwork',
  'SubscriberCarrierNetwork',
  'CarrierSettingsVersion',
  'PhoneNumber',
  'VoiceRoamingEnabled',
  'DataRoamingEnabled',
  'IsRoaming',
  'PersonalHotspotEnabled',
  'SubscriberMCC',
  'SubscriberMNC',
  'CurrentMCC',
  'CurrentMNC'
];

export function deviceInformation (udid, queries = []) {
  if (queries.length === 0) {
    queries = ALL_QUERIES;
  }

  return {
    'request_type': 'DeviceInformation',
    'udid': udid,
    queries
  };
}

export function profileList (udid) {
  return {
    'request_type': 'ProfileList',
    'udid': udid
  };
}

export function availableOSUpdates (udid) {
  return {
    'request_type': 'AvailableOSUpdates',
    'udid': udid
  };
}

export function securityInfo (udid) {
  return {
    'request_type': 'SecurityInfo',
    'udid': udid
  };
}

export function certificateList (udid) {
  return {
    'request_type': 'CertificateList',
    'udid': udid
  };
}

export function OSUpdateStatus (udid) {
  return {
    'request_type': 'OSUpdateStatus',
    'udid': udid
  };
}

// Command is an action creator factory which takes a symbol representing an MDM command type and returns
// an action creator.
export function commandFactory (commandType) {
  switch (commandType) {
    case MDM.DEVICE_INFO:
      return deviceInformation;
    case MDM.PROFILE_LIST:
      return profileList;
    case MDM.AVAILABLE_OS_UPDATES:
      return availableOSUpdates;
    case MDM.SECURITY_INFO:
      return securityInfo;
    case MDM.CERTIFICATE_LIST:
      return certificateList;
    case MDM.OS_UPDATE_STATUS:
      return OSUpdateStatus;
    default:
      return null;
  }
}

