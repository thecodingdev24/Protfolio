import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, RotateCcw, Zap, Server, Database, Activity, ShieldCheck, Smartphone, CheckCircle, Info } from 'lucide-react';
import { CLOUD_NODES } from '../data';

export const CloudPlayground: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('gateway');
  const [cacheHit, setCacheHit] = useState<boolean>(true);
  const [telemetryLog, setTelemetryLog] = useState<string[]>([
    'System ready. Ingress listening on :443 (TLS 1.3)',
    'Ready for simulated traffic dispatch.'
  ]);

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStep(0);
    setTelemetryLog(prev => [
      `[${new Date().toLocaleTimeString()}] INGRESS: Dispatched request payload GET /api/v1/leaderboard`,
      ...prev.slice(0, 5)
    ]);

    const steps = [0, 1, 2, 3, 4, 5];
    steps.forEach((step, idx) => {
      setTimeout(() => {
        setActiveStep(step);
        if (step === 1) {
          setTelemetryLog(prev => [
            `[${new Date().toLocaleTimeString()}] GATEWAY: TLS terminated, JWT verified. Routing to cluster.`,
            ...prev.slice(0, 5)
          ]);
        } else if (step === 2) {
          setTelemetryLog(prev => [
            `[${new Date().toLocaleTimeString()}] BACKEND: Microservice executing business logic & state checks.`,
            ...prev.slice(0, 5)
          ]);
        } else if (step === 3) {
          setTelemetryLog(prev => [
            `[${new Date().toLocaleTimeString()}] CACHE: ${cacheHit ? 'CACHE HIT (1.1ms) - returning hot dataset' : 'CACHE MISS - querying relational persistence'}`,
            ...prev.slice(0, 5)
          ]);
        } else if (step === 4) {
          setTelemetryLog(prev => [
            `[${new Date().toLocaleTimeString()}] DB: MySQL indexed query evaluated, ACID isolation guaranteed.`,
            ...prev.slice(0, 5)
          ]);
        } else if (step === 5) {
          setTelemetryLog(prev => [
            `[${new Date().toLocaleTimeString()}] METRICS: 200 OK returned. Total roundtrip latency: ${cacheHit ? '14.2ms' : '28.6ms'}.`,
            ...prev.slice(0, 5)
          ]);
          setIsSimulating(false);
        }
      }, (idx + 1) * 600);
    });
  };

  const selectedNode = CLOUD_NODES.find(n => n.id === selectedNodeId) || CLOUD_NODES[1];

  const getNodeIcon = (iconName: string, isCurrent: boolean) => {
    const props = {
      className: `w-5 h-5 ${isCurrent ? 'text-slate-950 stroke-[2.5]' : 'text-slate-700'}`
    };
    switch (iconName) {
      case 'Smartphone': return <Smartphone {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Cpu': return <Server {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Activity': return <Activity {...props} />;
      default: return <Server {...props} />;
    }
  };

  return (
    <section id="cloud-lab" className="py-20 border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-emerald-600 tracking-wider uppercase">
                Interactive Architecture Lab
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                LIVE SIMULATOR
              </span>
            </div>
            <h2 className="font-space text-3xl sm:text-4xl font-bold text-slate-950 uppercase">
              The Cloud Backbone
            </h2>
          </div>
          <p className="text-slate-600 text-sm max-w-md">
            Click any node or trigger a simulated request packet to observe how high-throughput cloud systems handle distributed traffic.
          </p>
        </div>

        {/* Main Lab Board Card */}
        <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000]">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <button
                id="run-cloud-sim-btn"
                onClick={runSimulation}
                disabled={isSimulating}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all border-2 border-slate-950 ${
                  isSimulating
                    ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 shadow-[2px_2px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5'
                }`}
              >
                {isSimulating ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-slate-600 animate-ping" />
                    <span>Packet Travelling...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-slate-950" />
                    <span>Trigger Request Payload</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setCacheHit(!cacheHit)}
                className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-mono text-xs font-semibold border border-slate-300 transition-colors"
                title="Toggle between cache hit and cache miss latency"
              >
                Mode: <span className={cacheHit ? 'text-emerald-700 font-bold' : 'text-amber-700 font-bold'}>
                  {cacheHit ? 'Cache Hit (Optimized)' : 'Cache Miss (Full Query)'}
                </span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Cluster: <strong className="text-slate-800">Healthy</strong>
              </span>
              <span>•</span>
              <span>Protocols: <strong className="text-slate-800">HTTP/2, TCP</strong></span>
            </div>
          </div>

          {/* Node Diagram Layout */}
          <div className="py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {CLOUD_NODES.map((node, index) => {
                const isCurrent = activeStep === index;
                const isSelected = selectedNodeId === node.id;

                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      isCurrent
                        ? 'bg-emerald-300 border-slate-950 shadow-[4px_4px_0px_0px_#000] -translate-y-1'
                        : isSelected
                        ? 'bg-emerald-50/70 border-slate-900 shadow-[3px_3px_0px_0px_#000]'
                        : 'bg-white hover:bg-slate-50 border-slate-300'
                    }`}
                  >
                    {/* Active Step Neon Beacon */}
                    {isCurrent && (
                      <span className="absolute -top-2.5 -right-2 px-1.5 py-0.5 rounded bg-slate-950 text-emerald-300 font-mono text-[9px] font-bold tracking-tight">
                        ACTIVE PACKET
                      </span>
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2 rounded-lg ${isCurrent ? 'bg-white' : 'bg-slate-100'} border border-slate-200`}>
                        {getNodeIcon(node.icon, isCurrent)}
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="font-space font-bold text-xs text-slate-950 line-clamp-1">
                      {node.title}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 line-clamp-1 mt-0.5">
                      {node.role}
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-400">LATENCY</span>
                      <span className="font-semibold text-slate-800">{node.latency}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Detail & Telemetry Terminal split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-4 border-t border-slate-200">
            {/* Selected Node Spec */}
            <div className="md:col-span-6 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-600" />
                  Node Architecture Specification
                </span>
                <span className="px-2 py-0.5 rounded bg-white text-slate-800 font-mono text-[10px] font-bold border border-slate-300">
                  {selectedNode.status.toUpperCase()}
                </span>
              </div>
              <h4 className="font-space font-bold text-base text-slate-900">
                {selectedNode.title} — {selectedNode.role}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                {selectedNode.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700">
                  Latency: <strong>{selectedNode.latency}</strong>
                </span>
                <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700">
                  Redundancy: <strong>Active/Standby</strong>
                </span>
                <span className="px-2 py-1 rounded bg-white border border-slate-200 text-slate-700">
                  Reliability: <strong>99.99%</strong>
                </span>
              </div>
            </div>

            {/* Live Terminal Log */}
            <div className="md:col-span-6 p-4 rounded-xl bg-slate-950 text-slate-100 font-mono text-xs border border-slate-900 shadow-inner flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    LIVE PIPELINE LOGS
                  </span>
                  <span className="text-[9px] text-slate-500">stdout</span>
                </div>
                <div className="space-y-1 overflow-hidden">
                  {telemetryLog.map((log, idx) => (
                    <div
                      key={idx}
                      className={`text-[11px] leading-snug line-clamp-1 ${
                        idx === 0 ? 'text-emerald-300 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 mt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span>Buffer: OK</span>
                <span>Click nodes above to inspect</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
