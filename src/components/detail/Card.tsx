export function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="shadow-card rounded-card_radius px-20 py-[60px] bg-card_background">
      <div className="border-b-[3px] border-primary50 pb-[18px] text-center mb-6">
        <h3 className="font-semibold text-head_text text-4xl leading-[56px]">{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
 );
}
