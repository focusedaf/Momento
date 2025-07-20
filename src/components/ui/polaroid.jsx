import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function Polaroid({items,message}) {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        {message}
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <div className="bg-white shadow-xl rounded-md p-4 flex flex-col items-center space-y-3 dark:bg-neutral-200">
            <img
              src={item.image}
              alt={item.title}
              className="relative z-10 h-64 w-64 object-cover mb-4"
            />
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-800 text-center">
              {item.title}
            </p>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
