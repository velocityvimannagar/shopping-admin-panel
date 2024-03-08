import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts";
import { Card, CardContent, CardHeader } from "@mui/material";

export function OrderReport() {
  const data = [
    { value: 5, label: "Pending" },
    { value: 10, label: "On the way" },
    { value: 15, label: "Delivered" },
    { value: 20, label: "Returned" },
    { value: 20, label: "Cancelled" },
  ];

  const size = {
    width: 400,
    height: 200,
  };
  const StyledText = styled("text")(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: "middle",
    dominantBaseline: "central",
    fontSize: 13,
  }));

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <Card className="col">
      <CardHeader title="Order Report"></CardHeader>
      <CardContent>
        <PieChart
          series={[
            { data, innerRadius: 40, arcLabel: (item) => `${item.value}%` },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontWeight: "bold",
            },
          }}
          {...size}
        >
          <PieCenterLabel>Total 144</PieCenterLabel>
        </PieChart>
      </CardContent>
    </Card>
  );
}
