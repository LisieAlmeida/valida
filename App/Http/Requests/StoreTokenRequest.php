<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

class StoreTokenRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "certificate_type_id" =>
                [
                    'required',
                    'numeric'
                ],
            "code" =>
            [
                'required',
                'max:255',
                'min:3'
            ],
            "crc" =>
            [
                'required',
                'max:255',
                'min:3'
            ],
            "number" =>
            [
                'required',
                'max:255',
                'min:3'
            ],
            "date_time_signature" =>
            [
                //'required',
                'date'
            ]
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ])->setStatusCode(400));
    }

    public function messages()
    {
        return
        [
            'certificate_type_id.required' => "Selecione o tipo de certidão",
            'code.required' => "O Campo código é obrigatório",
            'code.min' => "O Campo código deve ter no mínimo 3 caracteres",
            'number.required' => "O número da certidão é obrigatório",
            'number.min' => 'Número da certidão precisa ter no mínimo 3 caracteres',
            // 'title.required' => 'Digite uma breve descrição da cobrança',
            // 'total.regex' => 'Coloque uma moeda no padrão brasileiro'
        ];
    }
}
