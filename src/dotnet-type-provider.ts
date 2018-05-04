import * as model from '@yellicode/model';
import { TypeResolver } from './type-resolver';

export class DotNetTypeProvider
{
	private static _instance: DotNetTypeProvider;
	private typeResolver: TypeResolver;

	private constructor()
	{
		this.typeResolver = new TypeResolver('../model/dotnet-profile.ymn');
	}

	public static get Instance(): DotNetTypeProvider
	{
		return this._instance || (this._instance = new this());
	}

	/**
	* Returns a Type object that represents the System.Boolean type.
	*/
	public getBoolean(): model.Type
	{
		return this.typeResolver.getTypeById('VQPVUc3fEEGFSCr5BltbGQ');
	}

	/**
	* Returns a Type object that represents the System.Byte type.
	*/
	public getByte(): model.Type
	{
		return this.typeResolver.getTypeById('Ib6OQ75c2kqo3t1N825lUA');
	}

	/**
	* Returns a Type object that represents the System.Char type.
	*/
	public getChar(): model.Type
	{
		return this.typeResolver.getTypeById('W44umSnM7kqkRkQ-5ks5Zw');
	}

	/**
	* Returns a Type object that represents the System.DateTime type.
	*/
	public getDateTime(): model.Type
	{
		return this.typeResolver.getTypeById('S-2ASlG0PEizE9K32LPBDw');
	}

	/**
	* Returns a Type object that represents the System.DateTimeOffset type.
	*/
	public getDateTimeOffset(): model.Type
	{
		return this.typeResolver.getTypeById('dT63wOa3SUaUa-ql486DTQ');
	}

	/**
	* Returns a Type object that represents the System.Decimal type.
	*/
	public getDecimal(): model.Type
	{
		return this.typeResolver.getTypeById('rZDURj7r1ESm2uMVd_17Lg');
	}

	/**
	* Returns a Type object that represents the System.Double type.
	*/
	public getDouble(): model.Type
	{
		return this.typeResolver.getTypeById('CIB1MeAj4UulbOJqsgQQiQ');
	}

	/**
	* Returns a Type object that represents the System.Guid type.
	*/
	public getGuid(): model.Type
	{
		return this.typeResolver.getTypeById('qlg9N5yyQUCgEiwPtIppOQ');
	}

	/**
	* Returns a Type object that represents the System.Int16 type.
	*/
	public getInt16(): model.Type
	{
		return this.typeResolver.getTypeById('uVJ8796bEkGnT9_aznJlrg');
	}

	/**
	* Returns a Type object that represents the System.Int32 type.
	*/
	public getInt32(): model.Type
	{
		return this.typeResolver.getTypeById('HJ0rta6Yr0GRp3ht72Ys4g');
	}

	/**
	* Returns a Type object that represents the System.Int64 type.
	*/
	public getInt64(): model.Type
	{
		return this.typeResolver.getTypeById('cXQgE3QuZ0ep-2xSvYF1Hg');
	}

	/**
	* Returns a Type object that represents the System.Object type.
	*/
	public getObject(): model.Type
	{
		return this.typeResolver.getTypeById('yHBPCubaTECBj0X9z0P3aA');
	}

	/**
	* Returns a Type object that represents the System.SByte type.
	*/
	public getSByte(): model.Type
	{
		return this.typeResolver.getTypeById('oSh-I7zovU6iROF4MrScLQ');
	}

	/**
	* Returns a Type object that represents the System.Single type.
	*/
	public getSingle(): model.Type
	{
		return this.typeResolver.getTypeById('OgH1jc7KOkGH4tLssP9Xug');
	}

	/**
	* Returns a Type object that represents the System.String type.
	*/
	public getString(): model.Type
	{
		return this.typeResolver.getTypeById('8KZMbAcLEUaK7JnLZAw0Eg');
	}

	/**
	* Returns a Type object that represents the System.UInt16 type.
	*/
	public getUInt16(): model.Type
	{
		return this.typeResolver.getTypeById('v7y8lF8WVUWDmowL27fgqw');
	}

	/**
	* Returns a Type object that represents the System.UInt32 type.
	*/
	public getUInt32(): model.Type
	{
		return this.typeResolver.getTypeById('akqKd9VJtUSpeqgJQ4TCuA');
	}

	/**
	* Returns a Type object that represents the System.UInt64 type.
	*/
	public getUInt64(): model.Type
	{
		return this.typeResolver.getTypeById('x0kt2XTCEUGyLR7b4J54nQ');
	}
}
