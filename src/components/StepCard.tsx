
import { ReactNode } from "react";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const StepCard = ({ number, title, description, icon }: StepCardProps) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white dark:bg-caller-darkblue rounded-xl shadow-md">
      <div className="flex-shrink-0 bg-caller-purple/10 dark:bg-caller-purple/20 text-caller-purple font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center">
        {number}
      </div>
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-caller-blue dark:text-caller-purple">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
