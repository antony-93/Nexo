import { useBottomSheetInternal } from "@gorhom/bottom-sheet";

export function useIsInBottomSheet(): boolean {
    try {
        useBottomSheetInternal();
        return true;
    } catch {
        return false;
    }
}