/**
 * POTAPanel Component
 * Displays Parks on the Air activations with ON/OFF toggle
 */
import React from 'react';

export const POTAPanel = ({ data, loading, showOnMap, onToggleMap }) => {
  return (
    <div className="panel" style={{ padding: '12px' }}>
      <div className="panel-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <span>🏕️ POTA ACTIVATORS</span>
        <button
          onClick={onToggleMap}
          style={{
            background: showOnMap ? 'rgba(170, 102, 255, 0.3)' : 'rgba(100, 100, 100, 0.3)',
            border: `1px solid ${showOnMap ? '#aa66ff' : '#666'}`,
            color: showOnMap ? '#aa66ff' : '#888',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '10px',
            fontFamily: 'JetBrains Mono',
            cursor: 'pointer'
          }}
        >
          🗺️ {showOnMap ? 'ON' : 'OFF'}
        </button>
      </div>
      
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <div className="loading-spinner" />
        </div>
      ) : data && data.length > 0 ? (
        <div style={{ fontSize: '11px', fontFamily: 'JetBrains Mono, monospace' }}>
          {data.slice(0, 5).map((spot, i) => (
            <div 
              key={`${spot.call}-${i}`}
              style={{ 
                display: 'grid',
                gridTemplateColumns: '70px 70px 1fr',
                gap: '8px',
                padding: '4px 0',
                borderBottom: i < data.length - 1 ? '1px solid var(--border-color)' : 'none'
              }}
            >
              <span style={{ color: 'var(--accent-purple)', fontWeight: '600' }}>
                {spot.call}
              </span>
              <span style={{ color: 'var(--text-muted)' }}>
                {spot.ref}
              </span>
              <span style={{ color: 'var(--accent-cyan)', textAlign: 'right' }}>
                {spot.freq}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px' }}>
          No active POTA spots
        </div>
      )}
    </div>
  );
};

export default POTAPanel;
