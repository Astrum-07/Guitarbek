export const SectionHeader = ({ title, subtitle, className = '' }) => {
    return (
        <div className={`text-center mb-16 ${className}`}>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
