import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

export default function Polaroid({ items }) {
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If it's your first day at Fight Club, you have to fight.
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <div className="bg-white dark:bg-neutral-200 p-4 shadow-xl rounded-sm">
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-64 w-64 object-cover mb-4"
            />
            <h3 className="text-center text-sm font-bold text-neutral-700 dark:text-neutral-800">
              {item.title}
            </h3>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
