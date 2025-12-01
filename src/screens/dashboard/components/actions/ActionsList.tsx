import { useExpensesByCategoryQuery } from "@/context/LoadExpensesByCategoryQueryContext";
import { SelectDateAction } from "@/shared/components/actions";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function ActionsList() {
    const [date, setDate] = useState<Date>(new Date());

    const { setFilters, refetch } = useExpensesByCategoryQuery();

    useEffect(() => {
        setFilters({
            date
        });

        refetch();
    }, [date, setFilters, refetch]);

    return (
        <ScrollView
            horizontal
            contentContainerClassName="gap-2 mb-3 items-center px-6"
            showsHorizontalScrollIndicator={false}
            bounces={false}
        >
            <SelectDateAction onDateChange={setDate}/>
        </ScrollView>
    );
}