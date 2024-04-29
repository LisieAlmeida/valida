<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Token;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Token>
 */
class TokenFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'token' => Str::random(50, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'certificate_type_id' => 1,
            'code' => Str::random(10, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'crc' => Str::random(10, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'number' => Str::random(10, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'code' => Str::random(10, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'document' => Str::random(10, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'signature' => Str::random(10, '0123456789abcdefghijklmnopqrstuvwxyz'),
            'date_time_signature' => $this->faker->date(),
            'observation' => $this->faker->text(200)
        ];
    }
}
