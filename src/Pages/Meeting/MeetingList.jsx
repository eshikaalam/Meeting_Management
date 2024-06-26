import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const MeetingList = () => {
    return (
        <>
        
        <div className="p-6">
            <p className="text-center text-black text-2xl font-bold mb-8">Meeting Information</p>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Meeting Id</TableHead>
                        <TableHead>Meeting Type</TableHead>
                        <TableHead>Meeting Held On</TableHead>
                        <TableHead>Result</TableHead>
                        <TableHead className="text-right">Meeting Minutes</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>845</TableCell>
                        <TableCell>Academic</TableCell>
                        <TableCell>24/3/2</TableCell>
                        <TableCell>Result</TableCell>
                        <TableCell className="text-right">
                           
                        <div className="flex items-center justify-end">
                        
                                <Button>See Here</Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        </>
    );
};

export default MeetingList;
