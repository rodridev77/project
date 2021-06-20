<?php

namespace App\Mail;

use App\Models\Demand;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use stdClass;

class SubscribeDemandEmail extends Mailable
{
    use Queueable, SerializesModels;
    private $provider;
    private $demand;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(stdClass $provider)
    {
        $this->provider = $provider;
        $this->demand = Demand::find(2);
        //dd($this->demand);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject("Subscribe");
        $this->to($this->provider->email, $this->provider->firstname);
        return $this->view('mails.subscribe_demand_email', ['provider'=>$this->provider, 'demand'=>$this->demand]);
    }
}
