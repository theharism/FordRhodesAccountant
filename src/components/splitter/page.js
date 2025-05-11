import React from "react";

export default function Splitter() {
    const steps = [
        {
            title: "Arrange Consultation",
            desc: "Contact us by phone, email, or via the contact form.",
        },
        {
            title: "Discuss Your Needs",
            desc: "Describe your needs and personal circumstances.",
        },
        {
            title: "Create A Tailored Solution",
            desc: "We'll prepare a solution for you to review and approve.",
        },
        {
            title: "Create Growth",
            desc: "Once we've agreed on all the details, we'll get started.",
        },
    ];

    return (
        <section className="flex flex-col items-center justify-center py-20 lg:py-32 px-4 min-h-[500px] text-black">
            {/* heading */}
            <h2 className="text-center text-3xl md:text-4xl font-light max-w-4xl leading-snug mb-20">
                Your Success is Our Goal: <span className="font-normal">Bookkeeping Services</span>
                <br /> that Support Your Vision
            </h2>
            <br/>
            <br/>
            <br/>
            <br/>
            
            {/* grid */}
            <div className="mt-12 w-full max-w-6xl">
    <div className="grid grid-cols-[1fr_auto_1fr] gap-x-16">
        {steps.map((step, idx) => (
            <React.Fragment key={idx}>
                {/* Left column – title */}
                <div className="flex justify-end pr-4">
                    <h3 className="text-lg md:text-xl font-medium leading-snug text-right max-w-xs">
                        {step.title}
                    </h3>
                </div>

                {/* Middle column – dot + line */}
                <div className="relative flex flex-col items-center">
                    {/* Vertical line */}
                    {idx !== steps.length - 1 && (
                        <span className="absolute top-6 bottom-[-3.5rem] w-px bg-[#194c8c]/80" />
                    )}
                    {/* Dot */}
                    <span className="w-6 h-6 rounded-full bg-[#194c8c] border-4 border-white shadow-md z-10" />
                </div>

                {/* Right column – description */}
                <div className="flex justify-start pl-4">
                    <p className="text-base md:text-lg leading-relaxed max-w-xs">
                        {step.desc}
                    </p>
                </div>
            </React.Fragment>
        ))}
    </div>
</div>

        </section>
    );
}
