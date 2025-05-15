
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarInitial: string;
}

const TestimonialCard = ({ quote, author, role, avatarInitial }: TestimonialCardProps) => {
  return (
    <div className="bg-white dark:bg-caller-darkblue rounded-xl p-6 shadow-md">
      <div className="flex flex-col h-full">
        <div className="mb-4 flex-grow">
          <svg
            className="h-8 w-8 text-caller-purple/30 mb-2"
            fill="currentColor"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h.5c1.1 0 2 .9 2 2 0 .9-.6 1.7-1.5 1.9-1.1.3-1.4.6-1.9 1.2-.3.4-.1.9.4 1.2l.4.1c1.4 0 2.5-.7 3.2-1.8.6-1 1-2.2 1-3.6V10.5c0-1.1-.9-2-2-2H10zm12 0c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h.5c1.1 0 2 .9 2 2 0 .9-.6 1.7-1.5 1.9-1.1.3-1.4.6-1.9 1.2-.3.4-.1.9.4 1.2l.4.1c1.4 0 2.5-.7 3.2-1.8.6-1 1-2.2 1-3.6V10.5c0-1.1-.9-2-2-2H22z" />
          </svg>
          <p className="text-gray-700 dark:text-gray-300">{quote}</p>
        </div>
        <div className="flex items-center mt-4">
          <Avatar>
            <AvatarFallback className="bg-caller-blue text-white">
              {avatarInitial}
            </AvatarFallback>
            <AvatarImage src="" />
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
