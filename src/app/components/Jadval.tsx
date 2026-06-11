import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { User, ChevronDown, ChevronUp, Shield } from "lucide-react";

const supabaseUrl = "https://jtnqsbgrdbonxhlkaikn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0bnFzYmdyZGJvbnhobGthaWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjIyODQsImV4cCI6MjA5NDczODI4NH0.DNP0OmIN0p0uPlxnDUwx3wfuGyePjgtARkS214tr6Eo";

const supabase = createClient(supabaseUrl, supabaseKey);

const Node = ({ node, level = 0, isRoot = false }) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {!isRoot && (
        <div
          style={{
            width: 2,
            height: 28,
            background: "linear-gradient(to bottom, #dc2626, #991b1b)",
          }}
        />
      )}

      {/* Card */}
      <div
        style={{
          background: isRoot
            ? "linear-gradient(135deg, #7f1d1d 0%, #450a0a 100%)"
            : level === 1
            ? "linear-gradient(135deg, #1c1c1c 0%, #111 100%)"
            : "#0f0f0f",
          border: isRoot ? "2px solid #ef4444" : "1px solid #3f1010",
          borderRadius: 16,
          padding: isRoot ? "20px 24px" : "14px 18px",
          width: "100%",
          maxWidth: isRoot ? 340 : 280,
          minWidth: 220,
          boxShadow: isRoot
            ? "0 0 32px rgba(220,38,38,0.35), 0 4px 24px rgba(0,0,0,0.7)"
            : "0 2px 12px rgba(0,0,0,0.6)",
          transition: "box-shadow 0.2s",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: isRoot ? 4 : 2,
            background: "linear-gradient(90deg, #ef4444, #b91c1c)",
            borderRadius: "16px 16px 0 0",
          }}
        />

        {/* Title row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: node.people.length > 0 ? 10 : 0,
            marginTop: 4,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {isRoot && <Shield size={18} color="#ef4444" />}
            <span
              style={{
                color: isRoot ? "#ef4444" : "#f87171",
                fontWeight: 700,
                fontSize: isRoot ? 15 : 13,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              {node.title}
            </span>
          </div>
          {hasChildren && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: "rgba(239,68,68,0.12)",
                border: "1px solid #7f1d1d",
                borderRadius: 8,
                padding: "2px 6px",
                cursor: "pointer",
                color: "#f87171",
                display: "flex",
                alignItems: "center",
              }}
              aria-label={expanded ? "Yopish" : "Ochish"}
            >
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          )}
        </div>

        {/* People */}
        {node.people.map((person, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingTop: idx > 0 ? 8 : 0,
              marginTop: idx > 0 ? 8 : 0,
              borderTop: idx > 0 ? "1px solid #2a0a0a" : "none",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "rgba(239,68,68,0.12)",
                border: "1px solid #7f1d1d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <User size={16} color="#f87171" />
            </div>
            <div>
              <div
                style={{
                  color: "#f5f5f5",
                  fontWeight: 600,
                  fontSize: 13,
                  lineHeight: 1.3,
                }}
              >
                {person.fullName}
              </div>
              {person.position && (
                <div style={{ color: "#ef4444", fontSize: 11, marginTop: 2 }}>
                  {person.position}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasChildren && expanded && (
        <>
          <div
            style={{
              width: 2,
              height: 24,
              background: "linear-gradient(to bottom, #991b1b, #dc2626)",
            }}
          />

          {/* Horizontal line */}
          {node.children.length > 1 && (
            <div
              style={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ChildrenRow nodes={node.children} level={level + 1} />
            </div>
          )}

          {node.children.length === 1 && (
            <Node node={node.children[0]} level={level + 1} />
          )}
        </>
      )}
    </div>
  );
};

const ChildrenRow = ({ nodes, level }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 0,
        position: "relative",
      }}
    >
      {/* Horizontal connector bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "calc(50% - 50% + 20px)",
          right: "calc(50% - 50% + 20px)",
          height: 2,
          background: "#7f1d1d",
          zIndex: 0,
        }}
      />

      {nodes.map((child) => (
        <div
          key={child.id}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 10px",
            position: "relative",
          }}
        >
          {/* Vertical drop to child */}
          <div
            style={{
              width: 2,
              height: 24,
              background: "#dc2626",
            }}
          />
          <Node node={child} level={level} />
        </div>
      ))}
    </div>
  );
};

const TeamTree = () => {
  const [orgData, setOrgData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: groups } = await supabase.from("groups").select("*");
        const { data: members } = await supabase.from("members").select("*");

        const nodeMap = new Map();

        (groups || []).forEach((g) => {
          nodeMap.set(g.id, {
            id: g.id,
            title: g.name,
            people: [],
            children: [],
          });
        });

        (members || []).forEach((m) => {
          if (m.group_id && nodeMap.has(m.group_id)) {
            nodeMap.get(m.group_id).people.push({
              fullName: m.name || m.full_name,
              position: m.role || m.rank || m.position,
            });
          }
        });

        const root = {
          id: "root",
          title: "Guruh sardori",
          people: [{ fullName: "Sharipov Sherzod Shuxratovich" }],
          children: Array.from(nodeMap.values()),
        };

        setOrgData(root);
      } catch (err) {
        console.error(err);
        setError("Ma'lumot yuklashda xatolik");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#080808",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            border: "3px solid #1a1a1a",
            borderTop: "3px solid #ef4444",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <span
          style={{ color: "#ef4444", fontFamily: "sans-serif", fontSize: 15 }}
        >
          Yuklanmoqda...
        </span>
      </div>
    );

  if (error)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#080808",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ef4444",
          fontFamily: "sans-serif",
        }}
      >
        {error}
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        color: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(180deg, #0d0d0d 0%, #080808 100%)",
          borderBottom: "1px solid #3f1010",
          padding: "clamp(24px, 5vw, 48px) 20px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 200,
            background:
              "radial-gradient(ellipse, rgba(220,38,38,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              width: 4,
              height: 32,
              background: "#ef4444",
              borderRadius: 2,
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(22px, 5vw, 40px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            "QALQON"{" "}
            <span style={{ color: "#ef4444" }}>JAMOATCHILIK GURUXI</span>
          </h1>
          <div
            style={{
              width: 4,
              height: 32,
              background: "#ef4444",
              borderRadius: 2,
            }}
          />
        </div>

        <p
          style={{
            margin: 0,
            color: "#6b7280",
            fontSize: "clamp(12px, 2vw, 14px)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Tashkilot Strukturasi
        </p>
      </div>

      {/* Tree container */}
      <div
        style={{
          overflowX: "auto",
          overflowY: "visible",
          WebkitOverflowScrolling: "touch",
          padding: "clamp(24px, 4vw, 48px) 16px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: "fit-content",
            margin: "0 auto",
          }}
        >
          {orgData && <Node node={orgData} isRoot level={0} />}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "16px",
          borderTop: "1px solid #1a0505",
          color: "#4b0808",
          fontSize: 12,
          letterSpacing: "0.1em",
        }}
      >
        UWEDFORCE · QALQON © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default TeamTree;
