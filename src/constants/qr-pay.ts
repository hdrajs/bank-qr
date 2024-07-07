export enum QRProvider {
  VIETQR = 'VIETQR',
  VNPAY = 'VNPAY',
}

export enum QRProviderGUID {
  VNPAY = 'A000000775',
  VIETQR = 'A000000727'
}

export enum FieldID {
  VERSION = '00',
  INIT_METHOD = '01',
  VNPAYQR = '26',
  VIETQR = '38',
  CATEGORY = '52',
  CURRENCY = '53',
  AMOUNT = '54',
  TIP_AND_FEE_TYPE = '55',
  TIP_AND_FEE_AMOUNT = '56',
  TIP_AND_FEE_PERCENT = '57',
  NATION = '58',
  MERCHANT_NAME = '59',
  CITY = '60',
  ZIP_CODE = '61',
  ADDITIONAL_DATA = '62',
  CRC = '63'
}

export type EVMCoFieldID = '65' | '66' | '67' | '68' | '69' | '70' | '71' | '72' | '73' | '74' | '75' | '76' | '77' | '78' | '79'
export type UnreservedFieldID = '80' | '81' | '82' | '83' | '84' | '85' | '86' | '87' | '88' | '89' | '90' | '91' | '92' | '93' | '94' | '95' | '96' | '97' | '98' | '99'

export enum ProviderFieldID {
  GUID = '00',
  DATA = '01',
  SERVICE = '02'
}

export enum VietQRService {
  // Dịch vụ chuyển nhanh NAPAS247 đến Tài khoản
  BY_ACCOUNT_NUMBER = 'QRIBFTTA',
  // Dịch vụ chuyển nhanh NAPAS247 đến Thẻ
  BY_CARD_NUMBER = 'QRIBFTTC'
}

export enum VietQRConsumerFieldID {
  BANK_BIN = '00',
  BANK_NUMBER = '01'
}

export enum AdditionalDataID {
  // Số hóa đơn
  BILL_NUMBER = '01',
  // Số ĐT
  MOBILE_NUMBER = '02',
  // Mã cửa hàng
  STORE_LABEL = '03',
  // Mã khách hàng thân thiết
  LOYALTY_NUMBER = '04',
  // Mã tham chiếu
  REFERENCE_LABEL = '05',
  // Mã khách hàng
  CUSTOMER_LABEL = '06',
  // Mã số điểm bán
  TERMINAL_LABEL = '07',
  // Mục đích giao dịch
  PURPOSE_OF_TRANSACTION = '08',
  // Yêu cầu dữ liệu KH bổ sung
  ADDITIONAL_CONSUMER_DATA_REQUEST = '09'
}

export class Provider {
  fieldId?: string
  name?: QRProvider
  guid?: string
  service?: string
}

export class AdditionalData {
  billNumber?: string
  mobileNumber?: string
  store?: string
  loyaltyNumber?: string
  reference?: string
  customerLabel?: string
  terminal?: string
  purpose?: string
  dataRequest?: string
}

export class Consumer {
  bankBin?: string
  bankNumber?: string
}

export class Merchant {
  id?: string
  name?: string
}