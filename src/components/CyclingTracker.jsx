import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Calendar, Target, Bike, TrendingUp } from 'lucide-react';

const CyclingTracker = () => {
  const [totalKm, setTotalKm] = useState(0);
  const yearGoal = 10000;
  
  // Calculate days in the year
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((now - startOfYear) / (24 * 60 * 60 * 1000));
  const daysInYear = new Date(now.getFullYear(), 11, 31).getDate() + 334; // 365 or 366
  
  // Calculate metrics
  const percentComplete = (totalKm / yearGoal) * 100;
  const expectedProgress = (dayOfYear / daysInYear) * 100;
  const projectedDistance = (totalKm / dayOfYear) * daysInYear;
  const remainingKm = yearGoal - totalKm;
  const remainingDays = daysInYear - dayOfYear;
  const requiredDaily = remainingKm / remainingDays;
  
  return (
    <div className="w-full max-w-4xl space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bike className="h-6 w-6" />
            Cycling Challenge Progress Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Input for total kilometers */}
            <div className="flex items-center gap-4">
              <label className="min-w-32">Total kilometers:</label>
              <Input
                type="number"
                value={totalKm}
                onChange={(e) => setTotalKm(Number(e.target.value))}
                className="max-w-48"
              />
            </div>
            
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${Math.min(percentComplete, 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>0 km</span>
                <span>{yearGoal} km</span>
              </div>
            </div>
            
            {/* Stats grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">Progress</div>
                  <div>{totalKm.toFixed(1)} km ({percentComplete.toFixed(1)}%)</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">Expected Progress</div>
                  <div>{expectedProgress.toFixed(1)}%</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">Projected Year-End</div>
                  <div>{projectedDistance.toFixed(1)} km</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Bike className="h-5 w-5 text-blue-500" />
                <div>
                  <div className="font-medium">Required Daily</div>
                  <div>{requiredDaily.toFixed(1)} km/day</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CyclingTracker;
