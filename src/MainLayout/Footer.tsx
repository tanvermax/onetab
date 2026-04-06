import { Badge } from "../components/ui/badge";

export default function Footer() {
  return (
    <div className="flex justify-around text-slate-400 text-center p-6 mt-12  border-t border-gray-800 max-w-7xl mx-auto">
      <p>© ২০২৫ OneTab Education. সর্বস্বত্ব সংরক্ষিত।</p>
     <div className="flex flex-wrap gap-2">
      <Badge
        variant="outline"
        className="text-emerald-500 border-slate-700 px-4 py-1.5 rounded-full text-xs"
      >
        SDG Goal 4
      </Badge>
      <Badge
        variant="outline"
        className="text-emerald-500 border-slate-700 px-4 py-1.5 rounded-full text-xs"
      >
        NPT 9–13
      </Badge>
      <Badge
        variant="outline"
        className="text-emerald-500 border-slate-700 px-4 py-1.5 rounded-full text-xs"
      >
        One Teacher One Tab
      </Badge>
      </div>
    </div>
  );
}
