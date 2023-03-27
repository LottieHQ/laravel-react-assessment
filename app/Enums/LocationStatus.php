<?php

namespace App\Enums;

enum LocationStatus: string
{
    case OPEN = 'Open';
    case CLOSED = 'Closed';

    /**
     * Returns an array of Enum values e.g.
     * [ "Open", "Closed" ]
     *
     * @return array
     */
    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
