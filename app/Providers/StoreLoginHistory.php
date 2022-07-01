<?php

namespace App\Providers;

use App\Providers\UserLoginHistory;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class StoreLoginHistory
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Providers\UserLoginHistory  $event
     * @return void
     */
    public function handle(UserLoginHistory $event)
    {
        //
    }
}
