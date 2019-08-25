import deserialize from "../deserialize.js";
import getPropertyFirstValue from "../../helpers/getPropertyFirstValue.js";
import shapeTypes from './shapeTypes';

export default class Fill
{
    constructor()
    {
        this._Name = null;
        this._Color = [0, 0, 0];
        this._Opacity = 0;
        this._Width = 0;
        this._Type = shapeTypes.STROKE;
    }

    deserialize(json)
    {
        deserialize.string(json['nm'], (value) =>
        {
            this._Name = value;
        });

        this._Color = getPropertyFirstValue(json['c'])

        deserialize.number(getPropertyFirstValue(json['o']), (value) =>
        {
            this._Opacity = value / 100;
        });

        deserialize.number(getPropertyFirstValue(json['w']), (value) =>
        {
            this._Width = value;
        });
        
        return true;
    }

    get type() {
        return this._Type
    }

    get color() {
        return this._Color
    }

    get opacity() {
        return this._Opacity
    }

    get width() {
        return this._Width
    }
}