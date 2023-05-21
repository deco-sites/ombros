import Button from "$store/components/ui/Button.tsx";
import Countdown from "$store/islands/Countdown.tsx";

export interface Props {
  /**
   * @format date-time
   */
  date?: string;
  text?: string;
  labelButton?: string;
  link?: string;
}

function CampaignTimer({ text = 'Texto de chamada', labelButton = 'Botão', date = 'Sun May 21 2023 10:27:31 GMT-0300', link = '#' }: Props) {
  return (
    <div class="bg-primary py-4">
      <div class="flex flex-wrap justify-center items-center lg:gap-16">
        <div class="mb-4 w-full lg:w-max lg:my-0">
          <p class="text-center text-sm lg:text-xl text-primary-content">{text}</p>
        </div>
        <Countdown date={date} />
        <a href={link}>
            <Button>{labelButton}</Button>
        </a>
      </div>
    </div>
  );
}

export default CampaignTimer;
