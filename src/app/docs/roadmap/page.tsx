// src/app/docs/roadmap/page.tsx
import { ROADMAP, type RoadmapItem, type RoadmapStatus } from "./roadmap";

const STATUS_COLOR: Record<
    RoadmapStatus,
    {
        header: string;
        border: string;
        bg: string;
        badge: string;
    }
> = {
    done: {
        header: "text-green-700",
        border: "border-green-200",
        bg: "bg-green-50",
        badge: "text-green-700 border-green-200",
    },
    in_progress: {
        header: "text-orange-700",
        border: "border-orange-200",
        bg: "bg-orange-50",
        badge: "text-orange-700 border-orange-200",
    },
    planned: {
        header: "text-muted-foreground",
        border: "border-border",
        bg: "bg-muted/40",
        badge: "text-muted-foreground border-border",
    },
};

function groupAndSort(items: RoadmapItem[]) {
    const grouped: Record<RoadmapStatus, RoadmapItem[]> = {
        done: [],
        in_progress: [],
        planned: [],
    };

    for (const item of items) grouped[item.status].push(item);

    (Object.keys(grouped) as RoadmapStatus[]).forEach((k) => {
        grouped[k].sort((a, b) => a.order - b.order);
    });

    return grouped;
}

function RoadmapCard({
    item,
    status,
}: {
    item: RoadmapItem;
    status: RoadmapStatus;
}) {
    const color = STATUS_COLOR[status];

    return (
        <div
            className={`rounded-2xl border p-4 shadow-sm ${color.border} ${color.bg}`}
        >
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                    <h3 className="text-base font-semibold">{item.title}</h3>

                    {item.description ? (
                        <p className="mt-1 text-sm text-muted-foreground">
                            {item.description}
                        </p>
                    ) : null}
                </div>

                {(item.version || item.date) ? (
                    <div className="shrink-0 text-right text-xs text-muted-foreground">
                        {item.version ? <div>{item.version}</div> : null}
                        {item.date ? <div>{item.date}</div> : null}
                    </div>
                ) : null}
            </div>

            {item.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                        <span
                            key={t}
                            className={`rounded-full border px-2 py-1 text-xs ${color.badge}`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

const STATUS_LABEL: Record<RoadmapStatus, string> = {
    done: "Done",
    in_progress: "In Progress",
    planned: "Planned",
};


export default function RoadmapPage() {
    const grouped = groupAndSort(ROADMAP);
    const columns: RoadmapStatus[] = ["in_progress", "planned", "done"];

    return (
        <main className="space-y-6">
            <header className="text-center space-y-4 py-10">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Roadmap (Small BIM PRO V2.0.0)
                </h1>

                <p className="text-base md:text-lg text-muted-foreground">
                    สิ่งที่กำลังพัฒนา และแผนการพัฒนาในเวอร์ชันถัดไป
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-3">
                {columns.map((status) => (
                    <section key={status} className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-sm font-semibold">{STATUS_LABEL[status]}</h2>
                            <span className="text-xs text-muted-foreground">{grouped[status].length}</span>
                        </div>

                        <div className="space-y-3">
                            {grouped[status].map((item) => (
                                <RoadmapCard
                                    key={item.id}
                                    item={item}
                                    status={status}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    );
}
