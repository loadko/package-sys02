import { IsBoolean, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'

import { AddressCountry, AddressSalesArea, AddressStreetType } from './address.entity'

export class AddressDto {
  @IsEnum(AddressCountry)
  country: AddressCountry

  @IsString()
  @IsNotEmpty()
  province: string
  
  @IsString()
  @IsNotEmpty()
  postcode: string

  @IsString()
  @IsNotEmpty()
  city : string
  
  @IsString()
  @IsNotEmpty()
  
  @IsString()
  @IsNotEmpty()
  streetName : string

  @IsEnum(AddressStreetType)
  streetType : AddressStreetType

  @IsString()
  @IsNotEmpty()
  serviceableStatus : string

  @IsString()
  @IsNotEmpty()
  coberturaPisoPortaId  : string
  
  @IsEnum(AddressStreetType)
  salesArea : AddressSalesArea

  @IsString()
  @IsNotEmpty()
  streetNr : string

  @IsString()
  @IsNotEmpty()
  coberturaId : string

  @IsBoolean()
  validated : boolean

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  projectCode : string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  competition : string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  door : string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  block : string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  floor : string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  entrance : string
}